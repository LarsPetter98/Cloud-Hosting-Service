export default function Header () {
    return (
    <header class="header bg-green-500 text-white">
        <div class="container mx-auto px-4 py-4 lg:py-8 flex flex-col lg:flex-row justify-between items-center">
            <h1 class="header-title text-2xl lg:text-3xl">Cloud Storage</h1>
            <nav class="nav mt-4 lg:mt-0">
                <a href="#" class="nav-link active text-lg lg:text-xl text-white mr-4">Home</a>
                <a href="#" class="nav-link text-lg lg:text-xl text-white mr-4">Files</a>
                <a href="#" class="nav-link text-lg lg:text-xl text-white mr-4">Settings</a>
                <a href="#" class="nav-link text-lg lg:text-xl text-white">Help</a>
            </nav>
        </div>
    </header>
    )
}