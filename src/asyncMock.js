const services = [
    {
        id: '1',
        name: 'Basic Web Design',
        price: 200,
        category: 'Web Design',
        img: 'https://www.resourcetechniques.co.uk/news/web-design/img/37786/rt200220191.jpg',
        stock: 100,
        descrption: 'Basic Web Design description'
    }, {
        id: '2',
        name: 'E-commerce Website Design',
        price: 400,
        category: 'Web Design',
        img: 'https://ethicsinfotech.in/uploads/slider/e-commerce-website.png',
        stock: 100,
        descrption: 'E-commerce Website Design description'
    }, {
        id: '3',
        name: 'Search Engine Optimization (SEO)',
        price: 100,
        category: 'Digital Marketing',
        img: 'https://pwpblog.wpengine.com/wp-content/uploads/2022/07/Blog_P4B_SEO_Final-min.png',
        stock: 100,
        descrption: 'Search Engine Optimization description'
    }, {
        id: '4',
        name: 'Custom Website Development',
        price: 500,
        category: 'Web Development',
        img: 'https://lform.com/cms/resources/media/2021/01/custom-web-development-app-1184x694.jpg',
        stock: 500,
        descrption: 'Custom Website Development description'
    }, {
        id: '5',
        name: 'Backup & Disaster Recovery',
        price: 200,
        category: 'Website Maintenance',
        img: 'https://www.corporatevision-news.com/wp-content/uploads/2022/04/Website-Maintenance.jpg',
        stock: 100,
        descrption: 'Backup & Disaster Recovery description'
    }, {
        id: '6',
        name: 'Website Security Auditing',
        price: 400,
        category: 'Security Auditing',
        img: 'https://www.godaddy.com/garage/wp-content/uploads/website-security-audit-wordpress.jpg',
        stock: 100,
        descrption: 'Website Security Auditing description'
    },
]

export const getServices = () => {
    return new Promise ( (resolve) => {
        setTimeout(() => {
            resolve(services)
        }, 1500)
    })
}