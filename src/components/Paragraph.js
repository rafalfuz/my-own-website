import styled from 'styled-components'

const Paragraph = styled.p`
font-size: ${({fontSize})=> fontSize || '24px'};
text-transform: capitalize;
color: ${({color})=>color || '#BD8B28'} 
`

export default Paragraph;