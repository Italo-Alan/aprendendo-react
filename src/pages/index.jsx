import { useState, useEffect } from 'react';

	const Teste = () => {
		const [name, setName] = useState('Pablo');
	
	const handleChangeName = () => {
		setName(prev => prev === 'Pablo' ? 'José' : 'Pablo');
	}

    useEffect( () =>{
        alert('Renderizei')
    }, [name]);

	return(
		<div>
			<p>
				{name}
			</p>
            <button onClick={handleChangeName}>Trocar</button>
		</div>
		)
}

export {Teste};