import React, { useContext } from 'react'
import { FolioContext } from '../context/FolioContext';
import {Pie, Bar} from 'react-chartjs-2';
import { ObtenerNumMes } from '../helpers';

export const Report = () => {
    const {
      folios,
      foliostotales,
      foliospriorityone,
      foliosprioritytwo,
    } = useContext(FolioContext);
    
    const contadorMes = (mes) => {
      const foliosmes = folios.filter(foliosfilter => ObtenerNumMes(foliosfilter.created) === mes)
      return foliosmes.length;
    }
    const data = {
      labels:['Prioridad 1', 'Prioridad 2'],
      datasets:[{
        data:[(foliospriorityone.length*100/foliostotales), (foliosprioritytwo.length*100/foliostotales)],
        backgroundColor:['#FF5734', '#73B775'],

      }]
    };
    const opciones = {
      responsive: true,
    }

    const datosBarra = {
      labels: [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
      ],
      datasets: [
        {
          label: "Folios",
          backgroundColor: "rgba(24, 87, 164, 1)",
          borderColor: "black",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(31, 111, 208, 1)",
          hoverBorderColor: "white",
          data: [
            contadorMes(0),
            contadorMes(1),
            contadorMes(2),
            contadorMes(3),
            contadorMes(4),
            contadorMes(5),
            contadorMes(6),
            contadorMes(7),
            contadorMes(8),
            contadorMes(9),
            contadorMes(10),
            contadorMes(11),
          ],
        },
      ],
    };
    const optionBar={
      maintainAspectRatio:false,
      responsive:true
    }
    
    
    return (
      <div className="col-lg-9 col-md-8 ml-4 mt-5 perfil">
        <div className="row">
          <div className="col">
            <h6 className="lead">Reportes</h6>
            {foliostotales && foliospriorityone && foliosprioritytwo ? (
              <>
                <div className="row">
                  <div className="col">
                    <div
                      className="card my-5 shadow p-3 mb-5 bg-white rounded"
                      style={{ width: "100% ", height: "300px" }}
                    >
                      <Bar data={datosBarra} options={optionBar} />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="card shadow p-3 mb-5 bg-white rounded" style={{ width: "100% "}}>
                      <p className="">
                        Cantidad de reportes ingresados con prioridad 1:{" "}
                        {foliospriorityone.length}
                      </p>
                      <p className="">
                        Cantidad de reportes ingresados con prioridad 2:{" "}
                        {foliosprioritytwo.length}
                      </p>
                      <Pie data={data} options={opciones} />
                    </div>
                  </div>
                </div>
              </>
            ) : null}
            {}
          </div>
        </div>
      </div>
    );
}
