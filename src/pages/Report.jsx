import React, { useContext } from 'react'
import { FolioContext } from '../context/FolioContext';
import {Pie, Bar} from 'react-chartjs-2'

export const Report = () => {
    const {
      foliostotales,
      foliospriorityone,
      foliosprioritytwo,
    //   foliosmes,
      // mes,
      // guardarMes,
    } = useContext(FolioContext);

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
          backgroundColor: "#FF5734",
          borderColor: "black",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(31, 111, 208, 1)",
          hoverBorderColor: "white",
          data: [1, 2, 3, 4, 5, 6, 7, 8, 9, foliostotales, 11, 12],
        },
      ],
    };
    const optionBar={
      maintainAspectRatio:false,
      responsive:true
    }
    
    return (
      <div className="col-lg-9 col-md-8 mt-5 perfil">
        <div className="row">
          <div className="col">
            <h6 className="lead">Reportes</h6>
            {foliostotales && foliospriorityone && foliosprioritytwo ? (
              <>
              <div className="card">
                <p className="">
                  Cantidad de reportes ingresados: {foliostotales}
                </p>
                <p className="">
                  Cantidad de reportes ingresados con prioridad 1:{" "}
                  {foliospriorityone.length}
                </p>
                <p className="">
                  Cantidad de reportes ingresados con prioridad 2:{" "}
                  {foliosprioritytwo.length}
                </p>
                <Pie data={data} options={opciones}/>
                
              </div>
              <div className="card" style={{width:'100% ',height:'500px'}}>
              <Bar data={datosBarra} options={optionBar} />
              </div>

              </>
            ) : null}
            {

            }
          </div>
        </div>
      </div>
    );
}
