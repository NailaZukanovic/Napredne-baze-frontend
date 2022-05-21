import { useState } from 'react';

export function useOrders(){

    let orders = [];
    function lsOrders(orders) {
        return localStorage.setItem('orders',JSON.stringify(orders));
    }

    function lsGetOrder(orders) {
        return localStorage.removeItem('orders');
    }

    function lsUzmiOrdere()
    {
        return JSON.parse(localStorage.getItem('orders'))
    }
    
    return{
        orders,
        lsGetOrder,
        lsOrders,
        lsUzmiOrdere
    }

}