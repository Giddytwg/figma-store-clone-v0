import { create } from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";


const store = (set) => ({
    inventory: [],
    isLoading: false,
    initInventory: async(url) => {
        set({ isLoading: true })
        try {
            const res = await axios.get(url)
            set({inventory: res.data, isLoading:false})
        } catch (error) {
            console.log(error);
        }
    },
    addNewInventory: (newInventory) => 
        set(store => ({inventory: [...store.inventory, ...newInventory]})),
    selectedProducts: [],
    addSelectedProduct: (product, qty=1) => {
        const newProduct = {
            ...product,
            qty:qty
        }
        set(store => ({
        selectedProducts: store.selectedProducts.some((p)=> p.id === product.id)? store.selectedProducts : [...store.selectedProducts, newProduct]
    }))},
    deleteSelectedProduct: (id) => {
        console.log('An attempt to delete', id)
        set(store => ({ selectedProducts: store.selectedProducts.filter((sp)=> sp.id !== id)}))

    },
    draggedProduct: null,
    setDraggedProduct: (e) => {
        set({draggedProduct: e})
    },
})


export const useMyStore = create(persist(store))
