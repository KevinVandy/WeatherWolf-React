package weatherwolf

class UrlMappings {

    static mappings = {
        delete "/$controller/$id(.$format)?"(action:"delete")
        get "/$controller(.$format)?"(action:"index")
        get "/$controller/$id(.$format)?"(action:"show")
        post "/$controller(.$format)?"(action:"save")
        put "/$controller/$id(.$format)?"(action:"update")
        patch "/$controller/$id(.$format)?"(action:"patch")

        "/"(controller: 'application', action:'index')
        "500"(view: '/error')
        "404"(view: '/notFound')

        //Restful API for locations mappings
        "/location"(resources: 'location') {
            collection {
                '/index'(controller: 'location', action: 'index')
                '/search'(controller: 'location', action: 'search')
                '/searchcity'(controller: 'location', action: 'searchcity')
                '/searchstateprovince'(controller: 'location', action: 'searchstateprovince')
                '/searchcountry'(controller: 'location', action: 'searchcountry')
                '/fill'(controller: 'location', action: 'fill')
            }
        }
    }
}
