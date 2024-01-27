import { useEffect, useState } from "react";
import reqresApi from "../api/reqresApi";

export default () => {
    const [users, setUsers] = useState([]);
    const [result, setResult] = useState([]);
    const [errMsg, setErrMsg] = useState('');

    const searchApi = async() => {
        try {
            setErrMsg('');
            const response = await reqresApi.get('/users');
            //page
            setUsers(response.data);
            setResult(response.data.data);
        } catch(err) {
            console.log(err);
            setErrMsg('Sth wrong');
        }
    };

    useEffect(() => {
        searchApi();
    }, []);

    const searchCustomer = (searchTerm) => {
        setResult(
            users.data.filter(
                customer => (
                    customer.first_name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                    customer.last_name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                    customer.email.toLowerCase().includes(searchTerm.toLowerCase())
                )
            )
        );
    };

    return [searchCustomer, result, errMsg];
};