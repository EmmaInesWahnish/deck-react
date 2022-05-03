import React from 'react';
import '../App.css';
import { useAuthContext } from "../context/AuthContextProvider.jsx"
import { useTranslation } from 'react-i18next';

const Implementations = () => {
    const [t, i18n] = useTranslation('translation');
	const {user} = useAuthContext();
	return (
		<>
			{
				user ?
					<div>
						<h3>Implementations</h3>
					</div>
					:
					<div>
						<h3>{t("unauthorized")}</h3>
					</div>
			}
		</>
	)
}

export default Implementations;
