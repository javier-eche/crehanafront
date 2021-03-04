import React from 'react';
import urlIconArrowRigth from './../../assets/images/arrow-ios-right.svg';
import urlImgVisa from './../../assets/images/image9.png';
import urlImgPaypal from './../../assets/images/image_paypal.png';
import urlImgPagoEfectivo from './../../assets/images/image_pagoefectivo.png';
import Statistics from './Statistics';
import swal from 'sweetalert';


interface Props {
  dataCourse: any,
}

const PaidCourse: React.FC<Props> = ({ dataCourse }) => {
  const { name, level, users, score, price, real_price, discount } = dataCourse;

  return (
    <div className="flex flex-col sm:flex-row-reverse sm:justify-between">
      <div className="flex items-center justify-center mt-5 sm:mt-45 sm:hidden">
        <div className="flex items-center gap-1">
          <div className="flex justify-center items-center w-5 h-5 bg-dark rounded-full">
            <p className="text-sm font-bold text-white">1</p>
          </div>
          <p className="text-sm font-bold text-dark">Proceso de pago</p>
        </div>
        <img className="mx-1" src={urlIconArrowRigth} alt="" />
        <div className="flex items-center gap-1">
          <div className="flex justify-center items-center w-5 h-5 bg-gray-main rounded-full">
            <p className="text-sm font-bold text-white">2</p>
          </div>
          <p className="text-sm font-bold text-gray-main">Paso 2</p>
        </div>
      </div>
      <h3 className="text-sxl font-black sm:hidden">Resumen</h3>
      <div className="bg-gray-lighter px-4 sm:px-16 sm:w-3/6 sm:pt-10">
        <div className="flex flex-col mt-4 sm:flex-row sm:mt-45">
          <div className="w-32 h-24 sm:w-44 sm:h-28 rounded-lg bg-gray mr-6"></div>
          <div className="flex flex-col justify-center gap-2">
            <p className="font-bold">{name}</p>
            <p className="text-sm">Profesor del curso</p>
            <Statistics level={level} users={users} score={score} />
          </div>
        </div>
        <div className="mt-6">
          <div className="flex justify-between">
            <p className="text-sm">Subtotal</p>
            <p className="text-sm text-gray">CO$ {real_price}</p>
          </div>
          <div className="flex justify-between mt-2">
            <p className="text-sm">Tarjeta</p>
            <p className="text-sm text-gray">Dto. {discount}</p>
          </div>
          <div className="flex justify-between mt-2">
            <p className="text-sm">Total a pagar</p>
            <p className="text-base font-extrabold text-dark">CO$ {price}</p>
          </div>
        </div>
        <div className="hidden sm:flex sm:flex-col mt-59">
          <p className="text-xs font-bold">Notas legales</p>
          <p className="text-xs mt-2">Body 3- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id mi, mauris aliquam phasellus quis semper diam fringilla. Nunc nullam est in non. Enim sapien amet ut pharetra. Purus sagittis est felis sapien in. Auctor tellus, in mauris mi, facilisi arc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id mi, mauris aliquam phasellus quis semper diam fringilla. Nunc nullam est in non. Enim sapien amet ut pharetra. Purus sagittis est felis sapien in. Auctor tellus, in mauris mi, facilisi arcu sedut.</p>
        </div>
      </div>
      <div className="sm:w-2/5">
        <div className="hidden sm:flex items-center mt-45">
          <div className="flex items-center gap-1">
            <div className="flex justify-center items-center w-5 h-5 bg-dark rounded-full">
              <p className="text-sm font-bold text-white">1</p>
            </div>
            <p className="text-sm font-bold text-dark">Proceso de pago</p>
          </div>
          <img className="mx-1" src={urlIconArrowRigth} alt="" />
          <div className="flex items-center gap-1">
            <div className="flex justify-center items-center w-5 h-5 bg-gray-main rounded-full">
              <p className="text-sm font-bold text-white">2</p>
            </div>
            <p className="text-sm font-bold text-gray-main">Paso 2</p>
          </div>
          <img className="mx-1" src={urlIconArrowRigth} alt="" />
          <div className="flex items-center gap-1">
            <div className="flex justify-center items-center w-5 h-5 bg-gray-main rounded-full">
              <p className="text-sm font-bold text-white">3</p>
            </div>
            <p className="text-sm font-bold text-gray-main">Paso 3</p>
          </div>
        </div>
        <h3 className="text-sxl font-black mt-45">Método de pago</h3>
        <form>
          <div className="bg-gray-lighter mt-4">
            <div className="flex items-center mx-6 pt-7">
              <input type="radio" id="radio-example-3" name="radio" className="h-6 w-6 border rounded mr-3" />
              <label htmlFor="radio-example-3" className="text-gray-600 mr-3">Pagar con tarjeta</label>
              <img src={urlImgVisa} alt="" />
            </div>
            <div className="mx-6 mt-7">
              <label className="text-sm font-bold">Correo electrónico</label>
              <input type='email' className="w-full h-14 border rounded-lg focus:outline-none focus:border-indigo-900" />
            </div>
            <div className="mx-6 mt-6">
              <label className="text-sm font-bold">Número de tarjeta</label>
              <input type='text' className="w-full h-14 border rounded-lg focus:outline-none focus:border-indigo-900" />
            </div>
            <div className="flex flex-col sm:flex-row mx-6 gap-6 py-6">
              <div>
                <label className="text-sm font-bold">Fecha de vencimiento</label>
                <input type='text' className="w-full h-14 border pl-3.5 rounded-lg focus:outline-none focus:border-indigo-900" placeholder="Ej. 04 / 22" />
              </div>
              <div>
                <label className="text-sm font-bold">Código de seguridad</label>
                <input type='text' className="w-full h-14 border pl-3.5 rounded-lg focus:outline-none focus:border-indigo-900" placeholder="CVC / CVV" />
              </div>
            </div>
          </div>
          <div className="bg-gray-lighter mt-4">
            <div className="flex items-center py-5 mx-6">
              <input type="radio" id="radio-example-1" name="radio" className="h-6 w-6 border rounded mr-3" />
              <label htmlFor="radio-example-1"><img src={urlImgPagoEfectivo} alt="" /></label>
            </div>
          </div>
          <div className="bg-gray-lighter mt-4">
            <div className="flex items-center py-5 mx-6">
              <input type="radio" id="radio-example-2" name="radio" className="h-6 w-6 border rounded mr-3" />
              <label htmlFor="radio-example-2"><img src={urlImgPaypal} alt="" /></label>
            </div>
          </div>
          <div className="flex items-center mt-26">
            <input type="checkbox" id="checkbox-accept" className="h-4 w-4 border rounded mr-2.5" />
            <label htmlFor="checkbox-accept">Acepto expresamente todos los Términos y Condiciones.</label>
          </div>
          <button onClick={() => swal("Thank's You!", "You paid this book!", "success")} type="submit" className="btn__paid bg-dark text-white font-extrabold text-lg rounded mt-4">Comprar ahora</button>
        </form>
        <div className="flex flex-col sm:hidden mt-59">
          <p className="text-xs font-bold">Notas legales</p>
          <p className="text-xs mt-2">Body 3- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id mi, mauris aliquam phasellus quis semper diam fringilla. Nunc nullam est in non. Enim sapien amet ut pharetra. Purus sagittis est felis sapien in. Auctor tellus, in mauris mi, facilisi arc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id mi, mauris aliquam phasellus quis semper diam fringilla. Nunc nullam est in non. Enim sapien amet ut pharetra. Purus sagittis est felis sapien in. Auctor tellus, in mauris mi, facilisi arcu sedut.</p>
        </div>
      </div>
    </div>
  );
}

export default PaidCourse;

