import React from "react";
import styled from "styled-components";
import {
  DialogContent,
  DialogFooter,
  ConfirmButton,
} from "../FoodDialog/FoodDialog";
import { formatPrice } from "../Data/FoodData";

import { getPrice } from "../FoodDialog/FoodDialog";
import {Automobili} from '../Data/FoodData';

const OrderStyled = styled.div`
  position: fixed;
  right: 0px;
  top: 50px;
  width: 340px;
  background-color: white;
  height: calc(100% - 48px);
  z-index: 10;
  box-shadow: 0px 0px 5px 5px grey;
  display: flex;
  flex-direction: column;
`;

const OrderContent = styled(DialogContent)`
  padding: 20px;
  height: 100%;
`;

const OrderContainer = styled.div`
  padding: 10px 0px;
  border-bottom: 1px solid grey;
  ${({editable}) => editable ? `
  &:hover {
      cursor: pointer;
      background-color: #e7e7e7;

  }
`
  : `
  pointer-events: none;
`}
`;

const OrderItem = styled.div`
  padding: 10px 0px;
  display: grid;
  grid-template-columns: 20px 150px 20px 60px;
  justify-content: space-between;
`;

const DetailItem = styled.div`
  color: gray;
  font-size: 10px;
`;

export function Order({ orders, setOrders, lsGetOrder, lsOrders, lsUzmiOrdere, setOpenFood }) {
  const subtotal = orders.reduce((total, order) => {
    return total + getPrice(order);
  }, 0);

  const tax = subtotal * 0.07;
  const total = subtotal + tax;

  const deleteItem = (index) => {
    const newOrders = [...orders];
    newOrders.splice(index, 1);
    // setOrders(newOrders);
    lsGetOrder() //remove iz local storagea
    lsOrders(newOrders); //postavi novi
    orders = lsUzmiOrdere();
  };

  let value = true;

  const onChange = () => {
    value = !value;
  }
  return (
    <OrderStyled>
      {lsUzmiOrdere().length === 0 ? (
        <OrderContent>Your order's looking pretty empty.</OrderContent>
      ) : (
        <OrderContent>
          {" "}
          <OrderContainer>Your Order: </OrderContainer>{" "}
          {lsUzmiOrdere().map((order, index) => (
            <OrderContainer editable>
              <OrderItem
                onClick={() => {
                  setOpenFood({ ...order, index });
                }}
              >
                <div>{order.quantity}</div>
                <div>{order.name}</div>
                <div
                  style={{ cursor: "pointer" }}
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteItem(index);
                  }}
                >
                  ???????
                </div>
                <div>{formatPrice(getPrice(order))}</div>
              </OrderItem>
              <DetailItem>
                {order.toppings
                  .filter((t) => t.checked)
                  .map((topping) => topping.name)
                  .join(", ")}
              </DetailItem>
              {order.choice && <DetailItem>{order.choice}</DetailItem>}
            </OrderContainer>
          ))}
          <OrderContainer >
            <div>Cars</div>
          <>
          <div>
              {Automobili.map(Automobili => (
             <OrderItem>
                        <div />
                        <div>{Automobili.sifra}</div>
                        <div/>
                        <div>{Automobili.registracija}</div>
                        <div/>
                        <div>{Automobili.godina_proizvodnje}</div>
                        <div/>
                        <div>{Automobili.model_vozila}</div> 
              </OrderItem>

              ))}
          </div>
        </>
        </OrderContainer>
        </OrderContent>
      )}
      <DialogFooter>
        <ConfirmButton>Checkout</ConfirmButton>
      </DialogFooter>
    </OrderStyled>
  );
}
