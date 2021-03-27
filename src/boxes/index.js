const {registerBlockType} = wp.blocks;
const {RichText} = wp.editor
/* import {ReactComponent as Logo} from '../pizzeria-icon.svg'; */

registerBlockType('kervis/boxes', {
        title: 'Boxer',
        icon: 'store',
        categoria: 'kervis',
        attributes: 
        {
            headingBox : {
                type     : 'string',
                source   : 'html',
                selector : '.box h2'
            }
        },
        edit: (props) =>
        {
            /* extraer el contenido desde props */
            console.log(props)
            const { attributes : { headingBox }} = props;

            console.log(headingBox)

            const onChangeHeadingBox = nuevoHeading => 
            {
                console.log('nuevo headen')
            } 
            return ( 
                <div className="box">
                    <h2>
                        <RichText
                            placeholder="Escriba encabezado"
                            onChange={onChangeHeadingBox}
                        />
                    </h2>
                </div>
            )
        },
        save : () => {
            return(
                <h2>Desde el front end</h2>
            )
        }

});
