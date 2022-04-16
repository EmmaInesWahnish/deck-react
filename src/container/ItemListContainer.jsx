import db from '../../firebase.config.js';
import { collection, getDocs, query, where } from 'firebase/firestore'
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import '../../App.css';
import ItemList from '../../components/ItemList.jsx';
import Spinner from '../../components/Spinner.jsx';

const ItemListContainer = () => {
	const [things, setThings] = useState([]);
	const [bool, setBoolean] = useState(true);
	const { id } = useParams();

	useEffect(() => {
		const queryCollection = collection(db, "items");
		if (id) {
			const queryFilter = query(queryCollection,
				where('categoria', '==', id))
			getDocs(queryFilter)
				.then(resp => setThings(resp.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
				.catch(err => console.log(err))
				.finally(() => setBoolean(() => false))
		}
		else {
			getDocs(queryCollection)
				.then(resp => setThings(resp.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
				.catch(err => console.log(err))
				.finally(() => setBoolean(() => false))
		}
	}, [id])

	if (bool) {
		return (
			<div className="flex-container">
				<Spinner />
			</div>)
	} else {
		return (
			<div className="flex-container-card py-10">
				<ItemList item={things} />
			</div>
		);
	}

}


export default ItemListContainer;
