import create from "zustand";

const useStore = create((set) => ({
  books: [],
  query: "",
  isButtonClicked: false,
  wishlist: [],
  setBooks: (books) => set({ books }),
  setQuery: (query) => set({ query }),
  setIsButtonClicked: (isButtonClicked) => set({ isButtonClicked }),
  addToWishlist: (book) => {
    set((state) => {
      if (!state.wishlist.some((item) => item.id === book.id)) {
        state.wishlist.push(book);
      }
      return { wishlist: state.wishlist };
    });
  },
}));

export default useStore;
