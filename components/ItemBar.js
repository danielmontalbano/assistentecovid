export default function ItemBar({ children }){
    return (
        <div className="container mx-auto">
            <div className="flex flex-col text-center w-full m-2">
                {children}
            </div>
        </div>
    );
}