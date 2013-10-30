class Subwars < Sinatra::Base
  get '/' do
    erb :index
  end

  get '/admin' do
    erb :index, :layout => :admin_layout
  end

  # Commit Amber packages
  put '/*' do |path|
    path = [ settings.app_dir, 'packages', path ].join('/')
    puts "Commiting #{path}"

    dir = File.dirname(path)
    Dir.mkdir(dir) if !File.exists?(dir)

    File.open(path, 'w+') do |file|
      file.write(request.body.read)
    end

    "#{path} was successfully committed."
  end
end
