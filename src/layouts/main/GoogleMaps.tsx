export default function GoogleMaps() {
    return (
        <iframe
            className="w-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.764496864205!2d-75.57078008896379!3d6.162286593799182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4683000daefa81%3A0x9c7cf75a08c2e8aa!2sZona%20M%C3%A1gica%20%7C%20Eventos%2C%20recreaci%C3%B3n%20y%20mucho%20m%C3%A1s!5e0!3m2!1ses!2sco!4v1787172566033!5m2!1ses!2sco"
            width="600"
            height="450"
            style={{
                border: 0,
            }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
    );
}
