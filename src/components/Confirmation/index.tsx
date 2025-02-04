import { FC, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import OrderSummary from "../OrderSummary";
import { formatHideMask } from "../../utils/converters/formatHideNumberCard";
import Cart from "../Cart";
import './styles.scss'

const Confirmation: FC = () => {

  const location = useLocation();
  const formData = location.state?.formData
  const navigate = useNavigate();

  useEffect(() => {
    if (!formData) {
      navigate("/payment")
    }
  }, [formData, navigate])


  const handleClick = () => {
    navigate("/")
  }

  return (
    <div className="container">
      {
        formData &&
        <div className="confirmation">
          <h2>Compra efetuada com sucesso</h2>
          <p>{formatHideMask(formData.cardNumber)}</p>
          <p>{formData.name}</p>
          <p>{formData.cardExpiration}</p>
        </div>
      }
      <Cart />
      <OrderSummary text="Voltar ao inicio" onClick={handleClick} />

    </div>
  )
}

export default Confirmation;
