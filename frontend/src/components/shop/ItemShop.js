import { Form } from 'react-bootstrap';
import { useState, useContext } from 'react';
import { UserContext } from '../../context/UserContext';

function ItemShop({
  name,
  description,
  photo,
  precio,
  date,
  remove,
  index,
  setUnits,
  units,
}) {
  const [showMore, setShowMore] = useState(false);
  const totalPrice = (a, b) => {
    return a * b;
  };
  // eslint-disable-next-line
  const { cartExperience } = useContext(UserContext);

  const price = totalPrice(units, Number(precio));

  const descFirts_Part = description.split('.').slice(0, 4).join('.');
  const descSecond_Part = description.split('.').slice(4).join('.');

  return (
    <div className="bookingItemInfo posRel">
      <div className="imgShop">
        <img width="100%" src={photo} alt="imgshop" />
      </div>
      <div className="bookingExperienceInfo">
        <h3>{name}</h3>
        <p>
          {descFirts_Part}.{showMore && descSecond_Part}
          <span className="showMoreBtn" onClick={() => setShowMore(!showMore)}>
            {showMore ? 'Leer menos' : 'Leer más'}
          </span>
        </p>

        <Form.Label>
          Cantidad
          <Form.Control
            type="number"
            min="1"
            max="99"
            placeholder="1"
            onChange={setUnits}
          />
          <span onClick={() => remove()}>Eliminar</span>
        </Form.Label>
        <div className="dateBooking">
          <span>Fecha de Reserva:</span>
          <span>{date}</span>
        </div>
        <span className="priceShop">
          Total: {price ? `${Math.ceil(price)}.00 ` : '0.00 '}€
        </span>
      </div>
    </div>
  );
}
export default ItemShop;
