import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { api } from '../../services/api'
import { BackButton, Banner, CategoryButton, CategoryMenu, Container, ContainerTotal, ProductsContainer } from "./styles";
import { CardProduct } from "../../components/CardProduct";
import { formatPrice } from "../../utils/formatPrice";


export function Menu() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([])
    const [filterdProducts, setFilteredProducts] = useState([])

    const navigate = useNavigate()

    const { search } = useLocation()

    const queryParams = new URLSearchParams(search)

    const [activeCategory, setActiveCategory] = useState(() => {

        const categoryId = +queryParams.get('categorias')
        if (categoryId) {
            return categoryId
        } return 0
    })

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('/categories')

            const newCategory = [{ id: 0, name: 'Todas' }, ...data]

            setCategories(newCategory)

        }

        async function loadProducts() {
            const { data } = await api.get('/products')

            const newProducts = data.map((product) => (
                { currencyValue: formatPrice(product.price), ...product }
            ))

            setProducts(newProducts)
        }

        loadCategories()
        loadProducts()

    }, [])

    useEffect(() => {
        if (activeCategory === 0) {
            setFilteredProducts(products)
        } else {
            const newFilteredProducts = products.filter(
                (product) => product.category.id === activeCategory
            )

            setFilteredProducts(newFilteredProducts)
        }
    }, [products, activeCategory])

    return (
        <Container>

            <Banner>
                <h1>
                    O MELHOR <br /> HAMBURGUER <br /> ESTÁ AQUI
                    <span>Esse cardápio está irresistível!</span>
                </h1>
            </Banner>
            <ContainerTotal>
                <CategoryMenu>
                    {categories.map((category) => (
                        <CategoryButton key={category.id}
                            $isActiveCategory={category.id === activeCategory}
                            onClick={() => {
                                navigate(
                                    {
                                        pathname: '/cardapio',
                                        search: `?categorias=${category.id}`
                                    },
                                    {
                                        replace: true,
                                    },

                                )
                                setActiveCategory(category.id)
                            }}
                        >
                            {category.name}
                        </CategoryButton>
                    ))}
                </CategoryMenu>
                <ProductsContainer>
                    {filterdProducts.map((product) => (
                        <CardProduct key={product.id} product={product} />
                    ))}
                </ProductsContainer>
                <BackButton onClick={() => navigate('/')}>
                    Voltar
                </BackButton>
            </ContainerTotal>

        </Container>

    )
}