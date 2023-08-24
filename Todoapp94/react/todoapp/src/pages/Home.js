import React from "react";
import {Button, Container, Nav, Navbar} from 'react-bootstrap'

function Home() {
    return (
        <div>
            <div class="border container-sm">100% wide until small breakpoint</div>
<div class="border container-md">100% wide until medium breakpoint</div>
<div class="border container-lg">100% wide until large breakpoint</div>
<div class="border container-xl">100% wide until extra large breakpoint</div>
<div class="border container-xxl">100% wide until extra extra large breakpoint</div>
           
        </div>
    )
}

export default Home;