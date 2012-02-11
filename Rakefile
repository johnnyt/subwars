bundler_installed = !!(`gem list` =~ /^bundler/)

desc 'Setup your local environment'
task :setup do
  Dir['*.example'].each do |example_file|
    config_file = example_file.gsub(/\.example/,'')
    sh %Q!cp #{example_file} #{config_file}! unless File.exists?(config_file)
  end
  sh 'gem install bundler --pre --no-ri --no-rdoc' unless bundler_installed
  sh 'bundle install'
  sh 'npm install'
  sh 'git submodule init'

  if Dir.exists?('amber')
    # sh 'git submodule update https://github.com/NicolasPetton/amber.git'
  else
    sh 'git submodule add https://github.com/NicolasPetton/amber.git'
  end
  # sh 'git remote add heroku git@heroku.com:amber.git'
end

desc 'Update your local environment'
task :update => :setup do
  # no-op
end

desc 'Start server'
task :server do
  # sh 'node server.js'
  sh 'bundle exec foreman start'
end

desc 'Compile server'
task :compile do
  sh "./amber/bin/amberc -m WebServer -l ../../js/Amber-Node server"
end
