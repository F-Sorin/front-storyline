import React, {useState} from "react";
import axios from "axios";

function Home() {

    const [emails, setEmails] = useState([]);

    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1ODE1MTk4NzUsImV4cCI6MTU4MTUyNzA3NSwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoidXNlciJ9.pzeM9JZq3YtZWhBuNVk36VCpR-rwmpKEN4lDOXVDpVtJxW1HrAQO_nGu16pgcl4A5g7eJh6TYlEhUOUFmiJusFHV-e3gDVcu-jpB9CGk3JF0U3g2_9laQ1TzRwLfJfViucERrloSa2dIKuzX73NPAtDcIoL4uFiG2w2mANP4JFAGyR9tcYgMOqjtYsEP69a6BaueE92n5dg5SAkFUqnbQAaCVS-YxABlJ2_SIITPImqwzXhQqNh83JrgyKsqJEz9EBpB3Ks16ajymQuag5V2F4zenc-i6pIyoHgXyuMvK9ffr8Rwnsaoa69Y8DDSKT7ioZ0lBu26B0DGpohxKYynFU8dot5jP6FMQ6CQJnzhLYlEGZRZJaHSmEBW-s6xjY0v8Bw_73pePnEeBCIsL84o7QZlStTcYTVYXmCOXs3KMiGsD_iwMb3T_s0ZSZ-l4qiQmiFXDzr66gWtTBZL_xpDeU7t5mbvfvEZigwDn9wnZkE9YkljeCh5uAvwl0ZlJO0G1fGP4_zXnG7uvWYodCvVQ3rYh7ZvK4Imo5AxESjDQ7wJDJ8xXPjf3so5tw33ij8ZDEULhWC1d9HLTVostLidqaDJplMcZLLfbL1dlexehEyn9YFUd2TyHgs5YFyOwWqo-coh7NPJs_Zj7zwwe9DhM0Rqj9f9W4cPhNhM5daOips";

    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    };

    function getEmails() {
        axios.get(
            "http://localhost:8000/api/test",
            config
        ).then(
            (response) => {
                console.log(response.data)
            },
            (error) => {
                console.log(error)
            }
        );
        console.log(emails)
    }

    return(
        <div>
            LA PAGE D'ACCUEIL
            <button onClick={() => getEmails()}>Récupérer tout les emails</button>
        </div>
    );
}

export default Home;
