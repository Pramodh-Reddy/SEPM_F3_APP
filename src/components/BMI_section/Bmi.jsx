import React, { useState } from 'react';


import './Bmi.css';

import Main from './Main'
import Section1 from './Section1';
import BMR from './BMR';

export default function Bmi() {

    const [bmi, setBmi] = useState({
        bmi: "",
        health: "",
    })

    const [idl, setIdl] = useState({
        hamwi: "",
        devine: "",
        robinson: "",
        miller: ""
    })

    const [loading1, setLoading1] = useState(false)
    const [loading2, setLoading2] = useState(false)
    const [toggleSection, setToggleSection] = useState(false)

    return (

        <div className="bmi">
            <div className="container">
                <div className="hdng">
                    <span></span>
                    <h3>BMI</h3>
                </div>

                <Main setBmi={setBmi} setIdl={setIdl} setLoading1={setLoading1} setLoading2={setLoading2} />

                <div className="sections">
                    {!toggleSection ?
                        <Section1 loading1={loading1} loading2={loading2} idl={idl} bmi={bmi} setToggleSection={setToggleSection} />
                        : <BMR setToggleSection={setToggleSection} />}
                </div>
            </div>
        </div>






    )
}
