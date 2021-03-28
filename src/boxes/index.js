const {registerBlockType} = wp.blocks;
const {RichText} = wp.editor
/* import {ReactComponent as Logo} from '../pizzeria-icon.svg'; */

registerBlockType('kervis/boxes', {
        title: 'Boxer',
        icon: 'store',
        categoria: 'kervis',
        attributes: 
        {
            headingBox: {
                type: "string",
                source: "html",
                selector: ".box h2",
            },
            textoBox : {
                type : 'string',
                source : 'html',
                selector: ".box p"
            }
        },
        edit: (props) =>
        {
            /* extraer el contenido desde props */
            
            const { attributes : { headingBox, textoBox } , setAttributes } = props;

            const onChangeTetxoBox = nuevoTexto => {
                    setAttributes({ textoBox : nuevoTexto})
            }

            const onChangeHeadingBox = nuevoHeading => 
            {
                setAttributes({headingBox : nuevoHeading})

            } 
            return ( 
                <div className="box">
                    <h2>
                        <RichText
                            placeholder="Escriba encabezado"
                            onChange={onChangeHeadingBox}
                            value = {headingBox}
                        />
                    </h2>

                    <p>
                        <RichText 
                        placeholder="Agregar el Texto  nuestro componente"
                        onChange={onChangeTetxoBox}
                        />
                    </p>
                </div>
            )
        },
        save : (props) => {
           
           console.log(props)
           const {attributes: {headingBox, textoBox}} = props


            return(
                <div className="box">
                    <h2>
                        <RichText.Content value={headingBox}
                        />
                    </h2>
                    <p>
                        <RichText.Content value = {textoBox} />
                    </p>
                </div>
            )
        }

});
