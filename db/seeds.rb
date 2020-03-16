# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# Artists
various = Artist.create!({ name: 'various' });
# aimless = Artist.create!({ name: 'aimless' });
ambulo = Artist.create!({ name: 'Ambulo', img_url: 'https://spotlofi.s3-us-west-2.amazonaws.com/images/ambulo.jpeg' });
# arbour = Artist.create!({ name: 'Arbour'});
aso = Artist.create!({ name: 'Aso', img_url: 'https://spotlofi.s3-us-west-2.amazonaws.com/images/aso.jpg' });
# athena = Artist.create!({ name: 'athena' });
bluntone = Artist.create!({ name: 'BluntOne', img_url: 'https://spotlofi.s3-us-west-2.amazonaws.com/images/bluntone.jpeg'});
# blvk = Artist.create!({ name: 'Blvk' });
# brenky = Artist.create!({ name: 'brenky' });
# brillion = Artist.create!({ name: 'brillion.' });
c4c = Artist.create!({ name: 'C4C', img_url: 'https://spotlofi.s3-us-west-2.amazonaws.com/images/c4c.jpeg' });
chrismazuera = Artist.create!({ name: 'Chris Mazuera', img_url: 'https://spotlofi.s3-us-west-2.amazonaws.com/images/chrismazuera.jpg' });
# clapcotton = Artist.create!({ name: 'Clap Cotton' });
# cloudi = Artist.create!({ name: 'cloudi' });
cocabona = Artist.create!({ name: 'cocabona', img_url: 'https://spotlofi.s3-us-west-2.amazonaws.com/images/cocabona.jpeg' });
dontcry = Artist.create!({ name: 'Dontcry', img_url: 'https://spotlofi.s3-us-west-2.amazonaws.com/images/dontcry.jpeg' });
dlj = Artist.create!({ name: 'DLJ', img_url: 'https://spotlofi.s3-us-west-2.amazonaws.com/images/dlj.jpeg' });
# drkmnd = Artist.create!({ name: 'drkmnd' });
dryhope = Artist.create!({ name: 'dryhope', img_url: 'https://spotlofi.s3-us-west-2.amazonaws.com/images/dryhope.jpeg' });
enra = Artist.create!({ name: 'ENRA', img_url: 'https://spotlofi.s3-us-west-2.amazonaws.com/images/enra.jpeg' });
fatb = Artist.create!({ name: 'Fatb', img_url: 'https://spotlofi.s3-us-west-2.amazonaws.com/images/fatb.jpeg' });
# flovry = Artist.create!({ name: 'Flovry' });
glimlip = Artist.create!({ name: 'Glimlip', img_url: 'https://spotlofi.s3-us-west-2.amazonaws.com/images/glimlip.jpeg' });
gmills = Artist.create!({ name: 'G Mills', img_url: 'https://spotlofi.s3-us-west-2.amazonaws.com/images/gmills.jpeg' });
goosetaf = Artist.create!({ name: 'goosetaf', img_url: 'https://spotlofi.s3-us-west-2.amazonaws.com/images/goosetaf.jpeg' });
h1 = Artist.create!({ name: 'H.1', img_url: 'https://spotlofi.s3-us-west-2.amazonaws.com/images/h1.jpg' });
hmsurf = Artist.create!({ name: 'HM Surf', img_url: 'https://spotlofi.s3-us-west-2.amazonaws.com/images/hmsurf.jpeg' });
imagiro = Artist.create!({ name: 'imagiro', img_url: 'https://spotlofi.s3-us-west-2.amazonaws.com/images/imagiro.jpeg' });
jhfly = Artist.create!({ name: 'jhfly', img_url: 'https://spotlofi.s3-us-west-2.amazonaws.com/images/jhfly.png' });
jordychandra = Artist.create!({ name: 'Jordy Chandra', img_url: 'https://spotlofi.s3-us-west-2.amazonaws.com/images/jordychandra.jpeg' });
jsan = Artist.create!({ name: "j'san", img_url: 'https://spotlofi.s3-us-west-2.amazonaws.com/images/jsan.jpeg' });
# kokoro = Artist.create!({ name: 'kokoro' });
kupla = Artist.create!({ name: 'Kupla', img_url: 'https://spotlofi.s3-us-west-2.amazonaws.com/images/kupla.jpeg' });
lesspeople = Artist.create!({ name: 'less.people' });
mello = Artist.create!({ name: 'mell-ø', img_url: 'https://spotlofi.s3-us-west-2.amazonaws.com/images/mello.jpeg' });
mondoloops = Artist.create!({ name: 'Mondo Loops', img_url: 'https://spotlofi.s3-us-west-2.amazonaws.com/images/mondoloops.jpeg' });
mvdb = Artist.create!({ name: 'Mvdb', img_url: 'https://spotlofi.s3-us-west-2.amazonaws.com/images/mvdb.jpeg' });
pandrezz = Artist.create!({ name: 'Pandrezz', img_url: 'https://spotlofi.s3-us-west-2.amazonaws.com/images/pandrezz.jpeg' });
psalmtrees = Artist.create!({ name: 'Psalm Trees', img_url: 'https://spotlofi.s3-us-west-2.amazonaws.com/images/psalmtrees.jpeg' });
purrplecat = Artist.create!({ name: 'Purrple Cat', img_url: 'https://spotlofi.s3-us-west-2.amazonaws.com/images/purrplecat.jpeg' });
sarcasticsounds = Artist.create!({ name: 'Sarcastic Sounds', img_url: 'https://spotlofi.s3-us-west-2.amazonaws.com/images/sarcasticsounds.jpeg' });
tenderspring = Artist.create!({ name: 'tender spring', img_url: 'https://spotlofi.s3-us-west-2.amazonaws.com/images/tenderspring.jpeg' });
wys = Artist.create!({ name: 'WYS', img_url: 'https://spotlofi.s3-us-west-2.amazonaws.com/images/wys.jpeg' });

# Albums
amstudysession = Album.create!({ name: '1 Am. Study Session', year: 2019, artist_id: various.id, img_url: 'https://spotlofi.s3-us-west-2.amazonaws.com/images/1amstudysession.jpg' });
cloudsurfing = Album.create!({ name: 'Cloud Surfing', year: 2020, artist_id: bluntone.id, img_url: 'https://spotlofi.s3-us-west-2.amazonaws.com/images/cloudsurfing.jpg' });
laventureep = Album.create!({ name: "L'vanenture EP", year: 2020, artist_id: c4c.id, img_url: 'https://spotlofi.s3-us-west-2.amazonaws.com/images/laventureep.jpg' });
persceptive = Album.create!({ name: 'Perspective', year: 2020, artist_id: chrismazuera.id });
jirodreams = Album.create!({ name: 'Jiro Dreams', year: 2020, artist_id: dontcry.id });
soundsandthings = Album.create!({ name: 'sounds and things', year: 2016, artist_id: jhfly.id });

# Songs
# 1 am study session 
snowman = Song.create!({ name: 'Snowman', duration: '3:15', artist_id: wys.id, album_id: amstudysession.id, song_url: 'https://spotlofi.s3-us-west-2.amazonaws.com/songs/Snowman.mp3' });
cottoncloud = Song.create! ({ name: 'Cotton Cloud', duration: '2:03', artist_id: fatb.id, album_id: amstudysession.id, song_url: 'https://spotlofi.s3-us-west-2.amazonaws.com/songs/Cotton+Cloud.mp3' });
theplacesweusedtowalk = Song.create! ({ name: 'The Places We Used to Walk', duration: '2:16', artist_id: tenderspring.id, album_id: amstudysession.id, song_url: 'https://spotlofi.s3-us-west-2.amazonaws.com/songs/The+Places+We+Used+To+Walk.mp3' });
woolgloves = Song.create! ({ name: 'Wool Gloves', duration: '2:46', artist_id: imagiro.id, album_id: amstudysession.id, song_url: 'https://spotlofi.s3-us-west-2.amazonaws.com/songs/Imagiro.mp3' });
imsorry = Song.create!({ name: "I'm Sorry", duration: '2:17', artist_id: glimlip.id, album_id: amstudysession.id, song_url: "https://spotlofi.s3-us-west-2.amazonaws.com/songs/I'm+Sorry.mp3" });
nova = Song.create!({ name: 'Nova', duration: '1:44', artist_id: mello.id, album_id: amstudysession.id, song_url: 'https://spotlofi.s3-us-west-2.amazonaws.com/songs/Nova.mp3' });
carriedaway = Song.create!({ name: 'Carried Away', duration: '1:55', artist_id: goosetaf.id, album_id: amstudysession.id, song_url: 'https://spotlofi.s3-us-west-2.amazonaws.com/songs/Carried+Away.mp3' });
snowsand = Song.create!({ name: 'Snow & Sand', duration: '2:45', artist_id: jsan.id, album_id: amstudysession.id, song_url: 'https://spotlofi.s3-us-west-2.amazonaws.com/songs/Snow+%26+Sand.mp3' });
singlephial = Song.create!({ name: 'Single Phial', duration: '1:44', artist_id: hmsurf.id, album_id: amstudysession.id, song_url: 'https://spotlofi.s3-us-west-2.amazonaws.com/songs/Single+Phial.mp3' });
drops = Song.create!({ name: 'Drops', duration: '2:03', artist_id: cocabona.id, album_id: amstudysession.id, song_url: 'https://spotlofi.s3-us-west-2.amazonaws.com/songs/Drops.mp3' });
espresso = Song.create!({ name: 'Espresso', duration: '2:42', artist_id: aso.id, album_id: amstudysession.id, song_url: 'https://spotlofi.s3-us-west-2.amazonaws.com/songs/Espresso.mp3' });
luminescence = Song.create!({ name: 'luminescence', duration: '1:40', artist_id: ambulo.id, album_id: amstudysession.id, song_url: 'https://spotlofi.s3-us-west-2.amazonaws.com/songs/Luminescence.mp3' });
explorers = Song.create!({ name: 'Explorers', duration: '2:03', artist_id: dlj.id, album_id: amstudysession.id, song_url: 'https://spotlofi.s3-us-west-2.amazonaws.com/songs/Explorers.mp3' });
wishyouweremine = Song.create!({ name: 'Wish You Were Mine', duration: '2:02', artist_id: sarcasticsounds.id, album_id: amstudysession.id, song_url: 'https://spotlofi.s3-us-west-2.amazonaws.com/songs/Wish+You+Were+Mine.mp3' });
reflections = Song.create!({ name: 'Reflections', duration: '2:02', artist_id: bluntone.id, album_id: amstudysession.id, song_url: 'https://spotlofi.s3-us-west-2.amazonaws.com/songs/Reflections.mp3' });
alonetime = Song.create!({ name: 'Alone Time', duration: '3:23', artist_id: purrplecat.id, album_id: amstudysession.id, song_url: 'https://spotlofi.s3-us-west-2.amazonaws.com/songs/Alone+Time.mp3' });
owlsofthenight = Song.create!({ name: 'Owls of the Night', duration: '2:22', artist_id: kupla.id, album_id: amstudysession.id, song_url: 'https://spotlofi.s3-us-west-2.amazonaws.com/songs/Owls+of+the+Night.mp3' });
amber = Song.create!({ name: 'Amber', duration: '1:29', artist_id: enra.id, album_id: amstudysession.id, song_url: 'https://spotlofi.s3-us-west-2.amazonaws.com/songs/Amber.mp3' });
fever = Song.create!({ name: 'Fever', duration: '2:33', artist_id: psalmtrees.id, album_id: amstudysession.id, song_url: 'https://spotlofi.s3-us-west-2.amazonaws.com/songs/Fever.mp3' });
circle = Song.create!({ name: 'Circle', duration: '1:53', artist_id: h1.id, album_id: amstudysession.id, song_url: 'https://spotlofi.s3-us-west-2.amazonaws.com/songs/Circle.mp3' });
cuddlin = Song.create!({ name: 'Cuddlin', duration: '2:57', artist_id: pandrezz.id, album_id: amstudysession.id, song_url: 'https://spotlofi.s3-us-west-2.amazonaws.com/songs/Cuddlin.mp3' });
latenightcall = Song.create!({ name: 'Late Night Call', duration: '2:15', artist_id: jordychandra.id, album_id: amstudysession.id, song_url: 'https://spotlofi.s3-us-west-2.amazonaws.com/songs/Late+Night+Call.mp3' });
gyoza = Song.create!({ name: 'Gyoza', duration: '2:00', artist_id: lesspeople.id, album_id: amstudysession.id, song_url: 'https://spotlofi.s3-us-west-2.amazonaws.com/songs/Gyoza.mp3' });
keyframe = Song.create!({ name: 'Keyframe', duration: '2:00', artist_id: gmills.id, album_id: amstudysession.id, song_url: 'https://spotlofi.s3-us-west-2.amazonaws.com/songs/Keyframe.mp3' });
breeze = Song.create!({ name: 'Breeze', duration: '1:35', artist_id: mvdb.id, album_id: amstudysession.id, song_url: 'https://spotlofi.s3-us-west-2.amazonaws.com/songs/Breeze.mp3' });
lunardrive = Song.create!({ name: 'Lunar Drive', duration: '3:09', artist_id: mondoloops.id, album_id: amstudysession.id, song_url: 'https://spotlofi.s3-us-west-2.amazonaws.com/songs/Lunar+Drive.mp3' });
steps = Song.create!({ name: 'Steps', duration: '2:31', artist_id: dryhope.id, album_id: amstudysession.id, song_url: 'https://spotlofi.s3-us-west-2.amazonaws.com/songs/Steps.mp3' });

#cloudsurfing
antarcticsunrise = Song.create!({ name: 'Antarctic Sunrise', duration: '2:25', artist_id: bluntone.id, album_id: cloudsurfing.id, song_url: 'https://spotlofi.s3-us-west-2.amazonaws.com/songs/Antarctic+Sunrise.mp3' });
gatesofheaven = Song.create!({ name: 'Gates of Heaven', duration: '3:19', artist_id: bluntone.id, album_id: cloudsurfing.id, song_url: 'https://spotlofi.s3-us-west-2.amazonaws.com/songs/Gates+of+Heaven.mp3' });
monkserenity = Song.create!({ name: 'Monks Serenity', duration: "2:30", artist_id: bluntone.id, album_id: cloudsurfing.id, song_url: 'https://spotlofi.s3-us-west-2.amazonaws.com/songs/Monk+Serenity.mp3' });
underyourskin = Song.create!({ name: 'Under Your Skin', duration: '2:26', artist_id: bluntone.id, album_id: cloudsurfing.id, song_url: 'https://spotlofi.s3-us-west-2.amazonaws.com/songs/Under+Your+Skin.mp3' });
renderyourheart = Song.create!({ name: 'Render Your Heart', duration: '3:40', artist_id: bluntone.id, album_id: cloudsurfing.id, song_url: 'https://spotlofi.s3-us-west-2.amazonaws.com/songs/Render+Your+Heart.mp3' });

#laventureep
hello = Song.create!({ name: 'Hello', duration: '2:30', artist_id: c4c.id, album_id: laventureep.id, song_url: 'https://spotlofi.s3-us-west-2.amazonaws.com/songs/Hello.mp3' });
sayyes = Song.create!({ name: 'Say Yes', duration: '2:40', artist_id: c4c.id, album_id: laventureep.id, song_url: 'https://spotlofi.s3-us-west-2.amazonaws.com/songs/Say+Yes.mp3' });
laventure = Song.create!({ name: "L'aventure", duration: '2:41', artist_id: c4c.id, album_id: laventureep.id, song_url: "https://spotlofi.s3-us-west-2.amazonaws.com/songs/L'aventure.mp3" });
cherie = Song.create!({ name: "Chérie", duration: '3:27', artist_id: c4c.id, album_id: laventureep.id, song_url: 'https://spotlofi.s3-us-west-2.amazonaws.com/songs/Cherie.mp3' });
adieu = Song.create!({ name: 'Adieu', duration: '2:14', artist_id: c4c.id, album_id: laventureep.id, song_url: 'https://spotlofi.s3-us-west-2.amazonaws.com/songs/Adieu.mp3' });
drifter = Song.create!({ name: 'Drifter', duration: '2:10', artist_id: c4c.id, album_id: laventureep.id, song_url: 'https://spotlofi.s3-us-west-2.amazonaws.com/songs/Drifter.mp3' });