import './about.css';
import React, { useEffect, useState } from 'react';
import { ArrowLeft } from 'react-bootstrap-icons';


export default function About() {
    const [getData, setData] = useState([]);
    const [search, setSearch] = useState('');
    const [progress, setprogress] = useState(true);
    const [singleinfo, setsingleinfo] = useState(false);
    const [singleinfodata, setsingleinfodata] = useState([]);
    console.log(search)
    const use_Data = () => {
        fetch("https://gorest.co.in/public/v2/users")
            .then((response) => {
                return response.json();
            }).then((data) => {
                console.log(data);
                setData(data);
                setprogress(false);
            })
    }
    function userinfo(index) {
        setsingleinfodata(getData[index])
        setsingleinfo(true)
    }
    useEffect(() => {
        use_Data();
    }, [])
    return (
        <>
            <div className='container-fluid'>
                <div>
                    <form className="d-flex bg-secondary" role="search">
                        <input className="form-control m-2" type="search" onChange={(e) => setSearch(e.target.value)} placeholder="Search by id" aria-label="Search" />

                    </form>
                </div>
                {progress ?
                    <div className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
                        <button class="btn btn-primary" type="button" style={{ justifyContent: 'center' }} disabled>
                            <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                            <span class="visually-hidden">Loading...</span>
                        </button>
                        <button class="btn btn-primary" type="button" style={{ justifyContent: 'center' }} disabled>
                            <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                            Loading...
                        </button>
                    </div> : null}

                {
                    !singleinfo ? <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 m-1 bg-warning" style={{ justifyContent: 'center' }}>
                        {
                            getData.filter((items) => {
                                return search.toString() === '' ?
                                    items : items.id.toString().includes(search);
                            }).map((items, index) =>
                                <div className='shadow-lg card p-2 m-2 bg-secondary'id='card' onClick={()=>userinfo(index)} key={index}>
                                    <p className='h6' style={{ color: 'orange' }}>id:{items.id}</p>
                                    <p className='h6' style={{ color: 'lightblue' }}>email:{items.email}</p>
                                    <p className='h6' style={{ color: 'lightblue' }}>gender:{items.gender}</p>
                                    <p className='h6' style={{ color: 'lightblue' }}>Name:{items.name}</p>
                                </div>
                            )
                        }
                    </div> :
                        <div className='container-fluid mt-2'>
                            <ArrowLeft size={30} onClick={() => setsingleinfo(!singleinfo)} />
                            <div className="shadow-lg card p-2 m-2 bg-secondary">
                                <p className='h6' style={{ color: 'orange' }}>id:{singleinfodata.id}</p>
                                <p className='h6' style={{ color: 'lightblue' }}>email:{singleinfodata.email}</p>
                                <p className='h6' style={{ color: 'lightblue' }}>gender:{singleinfodata.gender}</p>
                                <p className='h6' style={{ color: 'lightblue' }}>Name:{singleinfodata.name}</p>
                            </div>

                        </div>
                }


            </div>
        </>
    )
}
