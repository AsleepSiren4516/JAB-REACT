import { useState } from "react";

export default function Donacion() {
  const [cantidad, setCantidad] = useState("");

  return (
    <form
      action="https://www.paypal.com/donate"
      method="post"
      target="_blank"
    >
      <input type="hidden" name="business" value="7UR3QW4YYSDCQ" />
      <input type="hidden" name="currency_code" value="MXN" />

      <div className="mb-3">
        <input
          type="number"
          name="amount"
          placeholder="Ingresa tu donación (MXN)"
          value={cantidad}
          onChange={(e) => setCantidad(e.target.value)}
          className="form-control"
          min="1"
          required
        />
      </div>

      <button type="submit" className="btn btn-primary btn-lg px-5">
        <i className="fab fa-paypal mr-2"></i> Donar
      </button>
    </form>
  );
}
