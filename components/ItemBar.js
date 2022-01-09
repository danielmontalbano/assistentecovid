export default function ItemBar({ children }){
    return (
        <div className="container mx-auto">
            <div className="text-center flex flex-col m-2">
                {children}
            </div>
        </div>
    );
}