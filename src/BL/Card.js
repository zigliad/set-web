// A simple vector.
// A classic card is v in (Z3)^4
export default class Card {
    constructor(attributes) {
        this.attributes = attributes
    }

    equals(other) {
        if (this.attributes.length != other.attributes.length) {
            return false
        }

        for (let i = 0; i < this.attributes.length; i++) {
            if (this.attributes[i] != other.attributes[i]) {
                return false
            }
        }

        return true
    }

    toString() {
        return this.attributes.map(attr => `${attr}`).join("-")
    }
}
