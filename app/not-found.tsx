export default function NotFound() {
    return <div className="text-center m-6" >
        <img src="/not-found.svg" alt="404" />
        <h2 className="text-4xl font-bold text-gray-900 mb-2">
            Ops!</h2>
        <p className="text-sm font-w300 text-gray-900">A página solicitada não foi encontrada.</p>
    </div>
}