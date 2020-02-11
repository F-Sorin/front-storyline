import React, {useState} from "react";
import axios from "axios";

function Home() {

    const [emails, setEmails] = useState([]);

    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1ODE0Mjc4MDUsImV4cCI6MTU4MTQzNTAwNSwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoidXNlckB1c2VyLmZyIn0.MJS7tDlW0Q87bysnwu1cMbTFZ7ITvP4n8ICBTFGnLmKHGu9NGxrjeocUMGEc4hl1__bzIaFAisOPbwdie45CiO1IprSEVf4hNWiW9yKpW3-C0FsfebYDFr3GSaOfoVQ1WAKH1Q6XXgqRTs9VQEBBWUW1UeQ6m_qaRTM_YD0ZdrT9ZL0lri1gsLdPl3eM0EoXxvzEp2v3i5b-mvXoJ3OxYrq8ED3iHkPdBXqZdWeKFOsJrE-Q19l0-mXVXywIyq4OcWZdFBmJjhQ_kTbY4G3c_zFc7On1Miv9nIlllTLN-QkZlmGeXdWR5ox5rmzuQTjVNWNJvfX8yeJjD0MGCTLj2_pUH4D2FRy1l6SMl3nv_zWSDieC0o0sjr_c0vTc9XhEwenQio1CSSkmFWkAPgjdv3V91jq_Io9b4Zoj8zSo4h8MPysBjVRgrY1RtHPH7Lu4wRNvAxhHt39b0r2fo4nqvCoj9hkZ_Krc-gjpuBilUBt512s3v-Rh-GxyIcW8vg_Cue1lOx4X6HqL9WhLJ0rFzY1GoHh5nwxLnzCpFnX_t_iNVym-rfJqpTfZ9-2T4CVdHX4gH-B78uHjW96tTShP3NcFY3InvIBY8druC3XGCyDS8I1H3M6nGLNN9bNNZ0_-0RYaE6pceRss5JHIdyDJPTd3XiPkloF6PlmsskYZ05o";

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = {
        'email' : 'tata@tata.fr',
        'password': 'tata',
        'pseudo': 'tata',
        'prenom': 'tata',
        'nom': 'tata',
        'confirm-password': 'tata'
    };

    function getEmails() {
        axios.post(
            "http://localhost:8001/register",
            body,
            config
        ).then(
            res =>
                console.log(res.data)
        );
    }

    return(
        <div>
            LA PAGE D'ACCUEIL
            <button onClick={() => getEmails()}>Récupérer tout les emails</button>
            <div>{emails}</div>
        </div>
    );
}

export default Home;
