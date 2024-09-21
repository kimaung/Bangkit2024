/**
 * TODO
 * Selesaikan kode pembuatan class Inventory dengan ketentuan:
 * - Memiliki properti `items` untuk menampung daftar item dalam bentuk array.
 * - Memiliki method `addItem` untuk menambahkan item ke properti `items`.
 * - Memiliki method `removeItem` untuk menghapus item berdasarkan `id`.
 * - Memiliki method `listItems` untuk mengembalikan string yang merupakan informasi detail barang (dipanggil dari fungs `item.displayDetails()`).
 */

class Inventory {
  constructor() {
    this.items = [];
  }

  // Method to add an item to the inventory
  addItem(item) {
    this.items.push(item);
  }

  // Method to remove an item from the inventory by id
  removeItem(id) {
    this.items = this.items.filter((item) => item.id !== id);
  }

  // Method to list all items in the inventory
  listItems() {
    if (this.items.length === 0) {
      return "No items in inventory.";
    }

    return this.items.map((item) => item.displayDetails()).join("\n");
  }
}

// Jangan hapus kode di bawah ini!
export default Inventory;
