export default function Title({text,}){
    return (
        <div className="container mx-auto">
            <div className="text-center m-2">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-green1">{text}</h1>
            </div>
        </div>
        
    );
}