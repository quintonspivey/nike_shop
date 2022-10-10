import React from 'react';
import styled from 'styled-components';
import Section from './Section.js';
function Home() {
    return (
        <Container>
            <Section 
            title="Brown Blazer "
            description="Order online for Touchless Delivery"
            backgroundImg="brownnike.jpg"
            rghtBtnText="Existing Inventory"
            lftBtnText="Customers Orders"/>
            <Section
             title="White Air Force Ones"
             description="Order online for Touchless Delivery"
             backgroundImg="p1.jpg"
             rghtBtnText="Existing Inventory"
             lftBtnText="Customers Orders"/>
            <Section
             title="Red Peicers"
             description="Order online for Tuchless Delivery"
             backgroundImg="rednikes.jpg"
             rghtBtnText="Existing Inventory"
             lftBtnText="Customers Orders"/>
             <Section 
             title="Yellow Perroccs"
            description="Order online for Touchless Delivery"
            backgroundImg="yellownike.jpg"
            rghtBtnText="Existing Inventory"
            lftBtnText="Customers Orders" />
           
        </Container>
            
        
    )
}

export default Home

const Container = styled.div`
height: 100vh;
`
