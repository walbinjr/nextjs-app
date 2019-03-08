import Header from './Header'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const Layout = (page) => (
  <div style={layoutStyle}>
    <Header />
    {page.children}
  </div>
)

export default Layout