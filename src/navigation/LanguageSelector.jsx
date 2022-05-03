import React from 'react';
import { useState, useEffect } from 'react';
import i18next from 'i18next';
import cookies from 'js-cookie'
import Dropdown from 'react-bootstrap/Dropdown'
import getUnicodeFlagIcon from 'country-flag-icons/unicode'
import GlobeIcon from '../widget/GlobeIcon.jsx'

const languages = [
	{
		code: 'fr',
		name: 'Français',
		country_code: 'FR'
	},
	{
		code: 'en',
		name: 'English',
		country_code: 'GB'
	},
	{
		code: 'es',
		name: 'Español',
		country_code: 'ES'
	},
	{
		code: 'pt',
		name: 'Português',
		country_code: 'BR'
	}
]

const LanguageSelector = () => {
	const [, updateState] = useState();
	const forceUpdate = React.useCallback(() => updateState({}), []);
	const currentLanguageCode = cookies.get('i18next')
	let found = languages.find(element => element.code === currentLanguageCode);
	let currentCountryCode = found.country_code

	return (
		<>
			<Dropdown>
				<Dropdown.Toggle variant="link" id="dropdown-basic">
					<GlobeIcon />
				</Dropdown.Toggle>

				<Dropdown.Menu>
					{languages.map(({ code, name, country_code }) => (
						<Dropdown.Item key={country_code}
							onClick={() => {
								i18next.changeLanguage(code);
								{ forceUpdate() }
							}}
						>
							<span className="mx-2">{getUnicodeFlagIcon(country_code)}</span>
							{name}
						</Dropdown.Item>
					))
					}
				</Dropdown.Menu>
			</Dropdown>
			<span className="mx-2">{getUnicodeFlagIcon(currentCountryCode)}</span>
		</>
	);
}

export default LanguageSelector;