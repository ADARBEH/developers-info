import { useReducer } from 'react';
import { developer } from './Developer';
import DeveloperList from './DeveloperList';



function DeveloperForm(props) {

    const [developers, dispatch] = useReducer(developer, [])

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!e.target.name.value) return;

        dispatch({
            type: 'ADD_DEVELOPER',
            payload: {
                name: e.target.name.value,
                language: e.target.language.value,
                technologies: e.target.technologies.value,
                food: e.target.food.value,
                drink: e.target.drink.value
            }
        })

        // console.log(developers)

    }

    const removeDeveloper = (id) => {
        dispatch({
            type: 'REMOVE_DEVELOPER',
            payload: {
                id
            }
        })
    }


    return (
        <>
            <div className='FORM'>

                <h1>Developer Form</h1>

                <form className="form_developer" onSubmit={handleSubmit}>
                    <div className="div_developer">
                        <label >Developer's Name :  </label>
                        <input type='text' name='name' />
                    </div>

                    <div className="div_developer">
                        <label >Programming Language : </label>

                        <select name="language" id="language">
                            <option value="HTML">HTML</option>
                            <option value="CSS">CSS</option>
                            <option value="Javascript">Javascript</option>
                        </select>
                    </div>

                    <div className="div_developer">
                        <label >Technologies : </label>

                        <select name="technologies" id="technologies">
                            <option value="Bootstrap ">Bootstrap</option>
                            <option value="Node">Node</option>
                            <option value="SQL">SQL</option>
                            <option value="React">React</option>
                        </select>
                    </div>

                    <div className="div_developer">
                        <label>Favorite Food : </label>
                        <input type='text' name='food' />
                    </div>

                    <div className="div_developer">
                        <label>Favorite Drink : </label>
                        <input type='text' name='drink' />
                    </div>

                    <div className="div_developer">
                        <input className="btm_developer" type='submit' name='Submit' />
                    </div>

                </form>
            </div>

            {
                developers.length > 0 && <DeveloperList 

                developers={developers} 
                dispatch={dispatch} 
                removeDeveloper ={removeDeveloper}
                
                />
            }
        </>
    );
}

export default DeveloperForm;