import { createBrowserRouter, Route, Routes } from "react-router";

import { Login, Register, Home, Menu, Cart, Checkout, CompletePayment, Orders, NewProducts, EditProducts, Products } from "../containers";


import { UserLayout } from "../layouts/UserLayout";
import { AdminLayout } from "../layouts/AdminLayout";

export function Router() {

    return (
        <Routes>
            <Route path="/" element={<UserLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/cardapio" element={<Menu />} />
                <Route path="/carrinho" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/complete" element={<CompletePayment />} />

            </Route>

            <Route path="/admin" element={<AdminLayout/>}>
                <Route path="/admin/pedidos" element={<Orders/>}/>
                <Route path="/admin/novo-produto" element={<NewProducts/>}/>
                <Route path="/admin/editar-produto" element={<EditProducts/>}/>
                <Route path="/admin/produtos" element={<Products/>}/>
            </Route>

            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Register />} />
        </Routes>
    )
}

// export const router = createBrowserRouter([

//     {
//         path: '/login',
//         element: <Login />
//     },
//     {
//         path: '/cadastro',
//         element: <Register />
//     },
//     {
//         path: '/',
//         element: (
//             <>
//                 <Header />
//                 <Home />
//                 <Footer />
//             </>
//         )
//     },
//     {
//         path: '/cardapio',
//         element: (
//             <>
//                 <Header />
//                 <Menu />
//                 <Footer />
//             </>
//         )
//     },
//     {
//         path: '/carrinho',
//         element: <Cart />
//     },
//     {
//         path: '/checkout',
//         element: <Checkout />
//     },
//     {
//         path: '/complete',
//         element: <CompletePayment />
//     },

// ]
// )