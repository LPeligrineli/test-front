import { FC, useContext } from "react"
import { CartContext } from "../../context/CartContext";
import formatCurrency from "../../utils/converters/formatCurrency";
import Button from "../ui/Button";
import { IOrderSummary } from "./OrderSummary.interface";

import './styles.scss'

const OrderSummary: FC<IOrderSummary> = ({text, onClick}) => {

  const { cartItems } = useContext(CartContext);

  return (
    <div className="orderSummary">
      <div className="orderSummary__item">
        <span>Produtos:({cartItems?.items?.length})</span>
        <span>{formatCurrency(cartItems?.subTotal)}</span>
      </div>
      <div className="orderSummary__item">
        <span>Frete:</span>
        <span>{formatCurrency(cartItems?.shippingTotal)}</span>
      </div>
      <div className="orderSummary__item">
        <span>Desconto:</span>
        <span className="font-primary font-bold">{formatCurrency(cartItems?.discount)}</span>
      </div>
      <div className="orderSummary__item font-bold">
        <span>Subtotal</span>
        <span>{formatCurrency(cartItems?.total)}</span>
      </div>
      <Button onClick={onClick} text={text}  />
    </div>
  )
}
export default OrderSummary
