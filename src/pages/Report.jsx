import React, { useContext } from 'react'
import { FolioContext } from '../context/FolioContext';
import {Pie, Bar} from 'react-chartjs-2';
import { useState } from 'react';
import { useEffect } from 'react';
import { ObtenerNumMes } from '../helpers';

export const Report = () => {
    const {
      folios,
      foliostotales,
      foliospriorityone,
      foliosprioritytwo,
    } = useContext(FolioContext);
   
    const [foliosEnero, guardarcontFoliosEnero] = useState(0)
    const [foliosfebrero, guardarcontFoliosFebrero] = useState(0)
    const [foliosmarzo, guardarcontFoliosMarzo] = useState(0)
    const [foliosabril, guardarcontFoliosAbril] = useState(0)
    const [foliosmayo, guardarcontFoliosMayo] = useState(0)
    const [foliosjunio, guardarcontFoliosJunio] = useState(0)
    const [foliosjulio, guardarcontFoliosJulio] = useState(0)
    const [foliosagosto, guardarcontFoliosAgosto] = useState(0)
    const [foliosseptiembre, guardarcontFoliosSeptiembre] = useState(0)
    const [foliosoctubre, guardarcontFoliosOctubre] = useState(0)
    const [foliosnoviembre, guardarcontFoliosNoviembre] = useState(0) 
    const [foliosdiciembre, guardarcontFoliosDiciembre] = useState(0)
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
            foliosEnero,
            foliosfebrero,
            foliosmarzo,
            foliosabril,
            foliosmayo,
            foliosjunio,
            foliosjulio,
            foliosagosto,
            foliosseptiembre,
            foliosoctubre,
            foliosnoviembre,
            foliosdiciembre,
          ],
        },
      ],
    };
    const optionBar={
      maintainAspectRatio:false,
      responsive:true
    }
    
    
    useEffect(()=>{
      // const mesesfiltrados = datosBarra.labels.map(meses => (meses).toLowerCase())
      const obtenerContadorMes=(folios, mes)=>{
        const contador = folios.filter(dato => ObtenerNumMes(dato.created)===(mes))
        switch ((mes)) {
          case 0:
            guardarcontFoliosEnero(contador.length)
            return;
          case 1:
            guardarcontFoliosFebrero(contador.length)
            return;
          case 2:
            guardarcontFoliosMarzo(contador.length)
            return;
          case 3:
            guardarcontFoliosAbril(contador.length);
            return;
          case 4:
            guardarcontFoliosMayo(contador.length)
            return;
          case 5:
            guardarcontFoliosJunio(contador.length)
            return;
          case 6:
            guardarcontFoliosJulio(contador.length)
            return;
          case 7:
            guardarcontFoliosAgosto(contador.length)
            return;
          case 8:
            guardarcontFoliosSeptiembre(contador.length)
            return;
          case 9:
            guardarcontFoliosOctubre(contador.length);
            return;
          case 10:
            guardarcontFoliosNoviembre(contador.length)
            return;
          case 11:
            guardarcontFoliosDiciembre(contador.length)
            return;

          default:
            return;
        }
      }
      const now = new Date()
      const nowmonth = now.getMonth();
      console.log(nowmonth);
      obtenerContadorMes(folios, nowmonth)
    },[folios, foliosoctubre])
    
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
