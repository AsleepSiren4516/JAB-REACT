import { useState } from "react";
import { FaHeart } from "react-icons/fa";

export default function Donacion() {
  const [cantidad, setCantidad] = useState("");

  const montos = [100, 250, 500];

  return (
    <form
      action="https://www.paypal.com/donate"
      method="post"
      target="_blank"
      className="donar-datos-inner"
    >
      <input type="hidden" name="business" value="7UR3QW4YYSDCQ" />
      <input type="hidden" name="currency_code" value="MXN" />

      <div className="montos-container">
        {montos.map((monto) => (
          <button
            key={monto}
            type="button"
            className={`monto-btn ${
              Number(cantidad) === monto ? "activo" : ""
            }`}
            onClick={() => setCantidad(monto)}
          >
            <strong>${monto}</strong>
            <span>Pesos</span>
          </button>
        ))}
      </div>

      <div className="donar-input-wrapper">
        <span className="donar-currency">$</span>

        <input
          type="number"
          name="amount"
          placeholder="0"
          value={cantidad}
          onChange={(e) => setCantidad(e.target.value)}
          onFocus={() => {
            if (montos.includes(Number(cantidad))) {
              setCantidad("");
            }
          }}
          className="form-control donar-input"
          min="1"
          required
        />
      </div>

      <button type="submit" className="donar-btn btn-primary btn-lg">
        <FaHeart /> Donar ahora
      </button>
    </form>
  );
}
