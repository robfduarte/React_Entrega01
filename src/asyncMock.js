const services = [
    {
        id: '1',
        name: 'Basic Web Design',
        price: 200,
        category: 'WebDesign',
        img: 'https://www.resourcetechniques.co.uk/news/web-design/img/37786/rt200220191.jpg',
        stock: 100,
        description: 'Basic Web Design description'
    }, {
        id: '2',
        name: 'E-commerce Website Design',
        price: 400,
        category: 'WebDesign',
        img: 'https://ethicsinfotech.in/uploads/slider/e-commerce-website.png',
        stock: 100,
        description: 'E-commerce Website Design description'
    }, {
        id: '3',
        name: 'Search Engine Optimization (SEO)',
        price: 100,
        category: 'DigitalMarketing',
        img: 'https://pwpblog.wpengine.com/wp-content/uploads/2022/07/Blog_P4B_SEO_Final-min.png',
        stock: 100,
        description: 'Search Engine Optimization description'
    }, {
        id: '4',
        name: 'Custom Website Development',
        price: 500,
        category: 'WebDevelopment',
        img: 'https://lform.com/cms/resources/media/2021/01/custom-web-development-app-1184x694.jpg',
        stock: 500,
        description: 'Custom Website Development description'
    }, {
        id: '5',
        name: 'Backup & Disaster Recovery',
        price: 200,
        category: 'WebsiteMaintenance',
        img: 'https://www.corporatevision-news.com/wp-content/uploads/2022/04/Website-Maintenance.jpg',
        stock: 100,
        description: 'Backup & Disaster Recovery description'
    }, {
        id: '6',
        name: 'Website Security Auditing',
        price: 400,
        category: 'SecurityAuditing',
        img: 'https://www.godaddy.com/garage/wp-content/uploads/website-security-audit-wordpress.jpg',
        stock: 100,
        description: 'Website Security Auditing description'
    },
]

export const getServices = () => {
    return new Promise ( (resolve) => {
        setTimeout(() => {
            resolve(services)
        }, 1500)
    })
}


export const getServiceById = (serviceId) => {
    return new Promise ( (resolve) => {
        setTimeout(() => {
            resolve(services.find(serv => serv.id === serviceId))
        }, 1500)
    })
}


export const getServicesByCategory = (categoryId) => {
    return new Promise ( (resolve) => {
        setTimeout(() => {
            resolve(services.filter(serv => serv.category === categoryId))
        }, 1500)
    })
}