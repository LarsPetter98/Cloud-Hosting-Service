export default function Features () {
    return (
        <section className="features mt-8 px-6 flex flex-col items-center">
            <div className="text-2xl">Features</div>
            <div className="xl:flex lg:flex md:flex mt-6 sm:block text-center">
                <div className="mr-3 py-1 px-12 shadow-md rounded flex flex-col items-center justify-center text-center w-11/12 mb-5 hover:bg-yellow-500 cursor-pointer">
                    <div>Upload Files</div>
                    <div className="text-sm mt-1">Upload your files securely to the cloud.</div>
                </div>
                <div className="mr-3 py-1 px-12 shadow-md rounded flex flex-col items-center justify-center text-center w-11/12 mb-5 hover:bg-yellow-500 cursor-pointer">
                    <div>Share with Others</div>
                    <div className="text-sm mt-1">Share files with friends and colleagues.</div>
                </div>
                <div className="py-1 px-12 shadow-md rounded flex flex-col items-center justify-center text-center w-11/12 mb-5 hover:bg-yellow-500 cursor-pointer">
                    <div>Organize Folders</div>
                    <div className="text-sm mt-1">Organize your files into folders for easy access.</div>
                </div>
            </div>
        </section>
    )
};