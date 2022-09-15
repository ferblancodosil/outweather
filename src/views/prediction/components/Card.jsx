import PropTypes from 'prop-types'
import GenericCard from '../../../components/Card'

const CLOTHES_IMAGE = {
    'windbreaker': 'https://www.totalprotex.es/media/catalog/product/cache/default/image/500x500/9df78eab33525d08d6e5fb8d27136e95/p/w/pw3-hi-vis-winter-jacket-0_2.jpg',
    'rain jacket': 'https://img01.ztat.net/article/spp-media-p1/89619f6e0e133b7d8d9d18211bcb951e/3047af4529f744be9f312a017602f56d.jpg?imwidth=1800&filter=packshot',
    'jacker warm jacket': 'https://ae01.alicdn.com/kf/HTB10Q2okaagSKJjy0Fbq6y.mVXaY/Chaqueta-acolchada-con-capucha-para-hombre-Parkas-de-estilo-largo-informal-holgada-c-lida-para-invierno.jpg_Q90.jpg_.webp',
    'coat': 'https://www.rlmedia.io/is/image/PoloGSI/s7-1223741_lifestyle?$rl_df_zoom_lif$',
    'sweater': 'https://www.bfgcdn.com/1500_1500_90/005-2340-0811/sherpa-dumji-sweater-jerseis-de-lana-merina.jpg',
    'shirt': 'https://cdn1.bambinifashion.com/img/p/6/6/0/2/5/3/660253--product-gallery.jpg',
    'umbrella': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdDaicK5_lM1sOWF05PLm0xNHTH-PlBsCXfrLwHXfyC-6UAhnctMkOYHqvZdq461W6su0&usqp=CAU',
    'gloves': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdDaicK5_lM1sOWF05PLm0xNHTH-PlBsCXfrLwHXfyC-6UAhnctMkOYHqvZdq461W6su0&usqp=CAU',
    'hat': 'https://media.istockphoto.com/photos/kids-cap-with-propeller-colorful-hat-3d-rendering-picture-id909957868?k=20&m=909957868&s=612x612&w=0&h=bDscqytdHlDuH8z0174Fo-dJf3If5JsdvqPuK18pSu8=',
    'warm socks': 'https://media.istockphoto.com/photos/kids-cap-with-propeller-colorful-hat-3d-rendering-picture-id909957868?k=20&m=909957868&s=612x612&w=0&h=bDscqytdHlDuH8z0174Fo-dJf3If5JsdvqPuK18pSu8=',
    'sunglasses': 'https://m.media-amazon.com/images/I/51zEsraniRL._UX569_.jpg',
    'pants': 'https://cdn.shopify.com/s/files/1/0589/5205/7032/products/Party_Pants_Front_KO_2048x.png?v=1642550850',
    'shorts': 'https://www.collinsdictionary.com/images/thumb/shorts_71442211_250.jpg?version=4.0.276',
    'boots': 'https://media.istockphoto.com/photos/yellow-boots-picture-id474862754?k=20&m=474862754&s=612x612&w=0&h=uY86tlb4bOci41lBrRWbyI60oNLtc-0uk-PHxzK4BrI=',
    'rain boots': 'https://www.shopmami.com/pub/media/catalog/product/cache/588d05a133a2a4c8b69326ffbb96e2fc/b/o/botas_de_agua_para_ni_os_en_colores_arco_iris.jpg',
    'sneakers': 'https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_533,b_rgb:f5f5f5/cms/4cPjEV5eojdt7FPBM1ILub/65509ccd965ebf770fd0e383b3f1761d/Allbirds_FY21_Q3_SUMMER_PACK_TREE_RUNNER_ANGLE_v2.png'
}

const Card = ({ clothes }) => {
    return <GenericCard topComponent={<img src={CLOTHES_IMAGE[clothes]} alt={clothes}/>} bottomComponent={<h3>{clothes}</h3>}></GenericCard>
}

Card.propTypes = {
    clothes: PropTypes.oneOf(Object.keys(CLOTHES_IMAGE)).isRequired
}

export default Card

