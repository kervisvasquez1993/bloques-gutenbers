const {registerBlockType} = wp.blocks;
const {RichText, InspectorControls, ColorPalette } = wp.editor
const {PanelBody} = wp.components
/* import {ReactComponent as Logo} from '../pizzeria-icon.svg'; */
/* 7 pasos para crear un bloque de gutenbers
    1---importar el componente en que se utilizara
    2--- colocar el componente donde deseas utulizar
    3--- crear una funcion que lea los contenido
    4--- registarr un atributo
    5--- extraer el contenido desde el props
    6--- Guardar el contenido con setAttribute
    7-- Leer los contenidos guardados en save()
*/
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
            },
            colorFondo : {
                type : 'string'
            },

        },
        edit: (props) =>
        {
            /* extraer el contenido desde props */
            
            const { attributes : { headingBox, textoBox, colorFondo } , setAttributes } = props;

            const onChangeTetxoBox = nuevoTexto => {
                    setAttributes({ textoBox : nuevoTexto})
            }

            const onChangeHeadingBox = nuevoHeading => 
            {
                setAttributes({headingBox : nuevoHeading})

            } 

            const onChangeColorFondo = nuevoColor => {
                setAttributes({colorFondo : nuevoColor})
            }
            return ( 
                
                <div>
                    <InspectorControls>
                         <PanelBody
                             title={'Color de fondo'}
                             initialOpen={true}
                         />
                         <div className="componets-base-control">
                             <div className="components-base-control__field">
                                 <label className="componets-base-control__label">
                                     Color de Fondo
                                 </label>
                                 <ColorPalette 
                                    onChange={onChangeColorFondo}
                                 />
                             </div>
                         </div>
                    </InspectorControls> 
                    <div className="box" style={{ backgroundColor  : colorFondo}}>
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
                            value= {textoBox}
                            />
                        </p>
                    </div>
                </div>
                
            )
        },
        save : (props) => {
           
           console.log(props)
           const {attributes: {headingBox, textoBox, colorFondo}} = props


            return(
                <div className="box" style={{backgroundColor : colorFondo}}>
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
