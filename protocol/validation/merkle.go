package validation

import (
	"math"

	"chain/crypto/sha3pool"
	"chain/protocol/bc"
)

var (
	leafPrefix     = []byte{0x00}
	interiorPrefix = []byte{0x01}
)

// CalcMerkleRoot creates a merkle tree from a slice of transactions
// and returns the root hash of the tree.
func CalcMerkleRoot(transactions []*bc.Tx) (root bc.Hash) {
	if len(transactions) == 0 {
		sha3pool.Sum256(root[:], nil)
		return root
	}

	// The first n hashes are the leaf transaction witness hashes.
	powOfTwo := nextPowerOfTwo(len(transactions))
	hashes := make([]bc.Hash, powOfTwo*2-1)
	valid := make([]bool, powOfTwo*2-1)

	h := sha3pool.Get256()
	for i, tx := range transactions {
		witHash := tx.WitnessHash()

		h.Write(leafPrefix)
		h.Write(witHash[:])
		h.Read(hashes[i][:])
		h.Reset()

		valid[i] = true
	}

	off := powOfTwo
	for i := 0; i < len(hashes)-1; i += 2 {
		switch {
		// If left node is invalid, the parent is invalid too.
		case !valid[i]:
			break

		// If there is no right child, the parent is just the left child's hash.
		case !valid[i+1]:
			hashes[off] = hashes[i]
			valid[off] = true

		// If there are both left and right children, compute the hash of the
		// interior prefix and both child hashes.
		default:
			h.Write(interiorPrefix)
			h.Write(hashes[i][:])
			h.Write(hashes[i+1][:])
			h.Read(hashes[off][:])
			h.Reset()
			valid[off] = true
		}
		off++
	}
	return hashes[len(hashes)-1]
}

// nextPowerOfTwo returns the largest power of two that is greater than or
// equal to  a given number. In other words, for some input n, the
// prevPowerOfTwo k is a power of two such that k/2 < n <= k. This is a
// helper function used during the calculation of a merkle tree.
func nextPowerOfTwo(n int) int {
	if n&(n-1) == 0 {
		return n // already power of 2
	}

	// Otherwise, find the next power of two.
	exponent := uint(math.Log2(float64(n))) + 1
	return 1 << exponent // 2^exponent
}
