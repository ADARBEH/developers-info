

function DeveloperList(props) {


    return (
        <>
            <div className='LIST'>
                {
                    props.developers.map((developer, index) => {
                        return (
                            <div key={index} className='developer'>
                                <h3>Developer's Name : {developer.name}</h3>
                                <h4>Programming Language : {developer.language}</h4>
                                <h4>Technologies : {developer.technologies}</h4>
                                <h4>Favorite Food : {developer.food}</h4>
                                <h4>Favorite Drink : {developer.drink}</h4>
                                <button onClick={() => props.removeDeveloper(developer.id)}>Remove</button>
                            </div>
                        )
                    }
                    )
                }
            </div>
        </>
    );
}

export default DeveloperList;