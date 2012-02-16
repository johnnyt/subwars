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

desc 'Alias for compile:all'
task :compile => 'compile:all'

namespace :compile do
  desc 'Compile server'
  task :server do
    sh "./amber/bin/amberc -m WebServer -l ../../js/SubWars-Node server"
  end

  desc 'Compile client'
  task :client do
    libs = %w[
      ../../public/js/jquery-ui-1.8.16/jquery-ui-1.8.16.min
      ../../public/js/bootstrap ../../public/js/polymaps.min
      ../../public/js/faye-browser-min ../../public/js/bookmarkbubble
      lib/jQuery/jquery.textarea lib/CodeMirror/codemirror lib/CodeMirror/smalltalk
      Kernel-Objects Kernel-Classes Kernel-Methods Kernel-Collections Kernel-Exceptions Kernel-Transcript
      Compiler Canvas IDE parser SUnit
      ../../js/HTML5 ../../js/SubWars-Client ../../js/SubWars-Node
    ].join(',')

    sh "./amber/bin/amberc -m SubWarsApp -l #{libs} public/js/client"
  end

  desc 'Compile server and client'
  task :all => [:client, :server]
end
