import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() {
  runApp(CareLoopApp());
}

class CareLoopApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'CareLoop',
      theme: ThemeData(
        primarySwatch: Colors.green,
      ),
      home: CheckInScreen(),
    );
  }
}

class CheckInScreen extends StatefulWidget {
  @override
  _CheckInScreenState createState() => _CheckInScreenState();
}

class _CheckInScreenState extends State<CheckInScreen> {
  bool checkedIn = false;
  String checkInTime = "";

  @override
  void initState() {
    super.initState();
    loadCheckInStatus();
  }

  Future<void> loadCheckInStatus() async {
    final prefs = await SharedPreferences.getInstance();
    final today = DateTime.now().toString().split(' ')[0];

    setState(() {
      checkedIn = prefs.getBool(today) ?? false;
      checkInTime = prefs.getString("${today}_time") ?? "";
    });
  }

  Future<void> handleCheckIn() async {
    final prefs = await SharedPreferences.getInstance();
    final now = DateTime.now();
    final today = now.toString().split(' ')[0];

    await prefs.setBool(today, true);
    await prefs.setString("${today}_time", "${now.hour}:${now.minute.toString().padLeft(2, '0')}");

    setState(() {
      checkedIn = true;
      checkInTime = "${now.hour}:${now.minute.toString().padLeft(2, '0')}";
    });

    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(content: Text("You're checked in ✅")),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(24.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text(
                'Good Morning ☀️',
                style: TextStyle(fontSize: 28, fontWeight: FontWeight.bold),
              ),
              SizedBox(height: 20),
              Text(
                'Tap once to check in',
                style: TextStyle(fontSize: 18, color: Colors.grey[700]),
              ),
              SizedBox(height: 40),

              GestureDetector(
                onTap: checkedIn ? null : handleCheckIn,
                child: Container(
                  width: double.infinity,
                  height: 200,
                  decoration: BoxDecoration(
                    color: checkedIn ? Colors.grey : Colors.green,
                    borderRadius: BorderRadius.circular(20),
                  ),
                  child: Center(
                    child: Text(
                      checkedIn ? '✅ CHECKED IN' : 'I\'M OK',
                      style: TextStyle(
                        fontSize: 36,
                        fontWeight: FontWeight.bold,
                        color: Colors.white,
                      ),
                    ),
                  ),
                ),
              ),

              SizedBox(height: 30),

              if (checkedIn)
                Text(
                  'Checked in at $checkInTime',
                  style: TextStyle(fontSize: 18, color: Colors.green),
                ),
            ],
          ),
        ),
      ),
    );
  }
}
