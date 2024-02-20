export default function Features () {
    return (
        <section class="features-section mt-1 lg:mt-1">
            <div class="container mx-auto px-4">
                <h2 class="text-3xl mb-8 text-center">Features</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                    <div class="feature bg-white shadow-md rounded-lg flex flex-col items-center p-4 cursor-pointer transition-colors duration-300 hover:bg-lightblue-400">
                        <i class="fas fa-cloud-upload-alt feature-icon text-4xl text-green-500"></i>
                        <h3 class="feature-title text-xl mb-2">Upload Files</h3>
                        <p class="feature-description text-base">Upload your files securely to the cloud.</p>
                    </div>
                    <div class="feature bg-white shadow-md rounded-lg flex flex-col items-center p-4 cursor-pointer transition-colors duration-300 hover:bg-lightblue-400">
                        <i class="fas fa-share-alt feature-icon text-4xl text-green-500"></i>
                        <h3 class="feature-title text-xl mb-2">Share with Others</h3>
                        <p class="feature-description text-base">Share files with friends and colleagues.</p>
                    </div>
                    <div class="feature bg-white shadow-md rounded-lg flex flex-col items-center p-4 cursor-pointer transition-colors duration-300 hover:bg-lightblue-400">
                        <i class="fas fa-folder feature-icon text-4xl text-green-500"></i>
                        <h3 class="feature-title text-xl mb-2">Organize Folders</h3>
                        <p class="feature-description text-base">Organize your files into folders for easy access.</p>
                    </div>
                </div>
            </div>
      </section>
    )
};